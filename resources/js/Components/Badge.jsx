const COLORS = {
    Low: 'bg-gray-100 text-gray-800',
    Medium: 'bg-blue-100 text-blue-800',
    High: 'bg-orange-100 text-orange-800',
    Urgent: 'bg-red-100 text-red-800',
    Open: 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-indigo-100 text-indigo-800',
    Resolved: 'bg-green-100 text-green-800',
    Closed: 'bg-gray-200 text-gray-700',
  };

  export default function Badge({ value }) {
    return (
      <span
        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
          COLORS[value] || 'bg-gray-100 text-gray-800'
        }`}
      >
        {value}
      </span>
    );
  }