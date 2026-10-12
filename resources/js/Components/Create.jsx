import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TicketForm from '@/Components/TicketForm';
import { Head, useForm } from '@inertiajs/react';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    priority: 'Low',
    status: 'Open',
    category: 'Hardware',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('tickets.store'));
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold text-gray-800">New Ticket</h2>}
    >
      <Head title="New Ticket" />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow">
          <TicketForm
            data={data}
            setData={setData}
            errors={errors}
            processing={processing}
            onSubmit={submit}
            submitLabel="Create Ticket"
          />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}