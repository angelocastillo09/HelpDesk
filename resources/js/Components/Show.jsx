import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Badge from '@/Components/Badge';
import { Head, Link, router } from '@inertiajs/react';

export default function Show({ ticket }) {
  const remove = () => {
    if (confirm('Delete this ticket?')) {
      router.delete(route('tickets.destroy', ticket.id));
    }
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold text-gray-800">Ticket #{ticket.id}</h2>}
    >
      <Head title={ticket.title} />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 rounded-lg bg-white p-6 shadow">
          <h3 className="text-2xl font-bold text-gray-900">{ticket.title}</h3>

          <div className="flex flex-wrap gap-2">
            <Badge value={ticket.priority} />
            <Badge value={ticket.status} />
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-700">
              {ticket.category}
            </span>
          </div>

          <p className="whitespace-pre-wrap text-gray-700">{ticket.description}</p>

          <div className="flex gap-3 pt-2">
            <Link
              href={route('tickets.edit', ticket.id)}
              className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
            >
              Edit
            </Link>
            <button
              onClick={remove}
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-500"
            >
              Delete
            </button>
            <Link href={route('tickets.index')} className="px-4 py-2 text-gray-600 hover:underline">
              Back
            </Link>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}