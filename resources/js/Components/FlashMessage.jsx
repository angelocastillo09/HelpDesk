import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function FlashMessage() {
  const { flash } = usePage().props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (flash?.success || flash?.error) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  if (!visible) return null;

  const isError = !!flash.error;

  return (
    <div
      className={`mb-4 flex items-center justify-between rounded-md p-4 text-sm ${
        isError ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
      }`}
    >
      <span>{flash.error || flash.success}</span>
      <button onClick={() => setVisible(false)} className="ml-4 font-bold">
        &times;
      </button>
    </div>
  );
}