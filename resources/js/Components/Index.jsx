import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Badge from '@/Components/Badge';
import { Head, Link, router } from '@inertiajs/react';

const cleanLabel = (label) =>
  label.replace('&laquo;', '«').replace('&raquo;', '»');

export default function Index({ tickets }) {
  const remove = (id) => {
    if (confirm('Delete this ticket?')) {
      router.delete(route('tickets.destroy', id));
    }
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="text-xl font-semibold text-gray-800">My Tickets</h2>}
    >
      <Head title="My Tickets" />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {tickets.data.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center shadow">
            <p className="text-gray-600">You have no tickets yet.</p>
            <Link
              href={route('tickets.create')}
              className="mt-4 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
            >
              Create your first ticket
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-lg bg-white shadow md:block">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Priority</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Status</th>
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tickets.data.map((t) => (
                    <tr key={t.id}>
                      <td className="px-4 py-3">
                        <Link
                          href={route('tickets.show', t.id)}
                          className="font-medium text-indigo-600 hover:underline"
                        >
                          {t.title}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{t.category}</td>
                      <td className="px-4 py-3"><Badge value={t.priority} /></td>
                      <td className="px-4 py-3"><Badge value={t.status} /></td>
                      <td className="space-x-3 px-4 py-3 text-right text-sm">
                        <Link href={route('tickets.edit', t.id)} className="text-indigo-600 hover:underline">
                          Edit
                        </Link>
                        <button onClick={() => remove(t.id)} className="text-red-600 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="space-y-4 md:hidden">
              {tickets.data.map((t) => (
                <div key={t.id} className="rounded-lg bg-white p-4 shadow">
                  <Link href={route('tickets.show', t.id)} className="font-semibold text-indigo-600">
                    {t.title}
                  </Link>
                  <p className="mt-1 text-sm text-gray-500">{t.category}</p>
                  <div className="mt-2 flex gap-2">
                    <Badge value={t.priority} />
                    <Badge value={t.status} />
                  </div>
                  <div className="mt-3 flex gap-4 text-sm">
                    <Link href={route('tickets.edit', t.id)} className="text-indigo-600">Edit</Link>
                    <button onClick={() => remove(t.id)} className="text-red-600">Delete</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex flex-wrap gap-1">
              {tickets.links.map((link, i) =>
                link.url ? (
                  <Link
                    key={i}
                    href={link.url}
                    className={`rounded border px-3 py-1 text-sm ${
                      link.active
                        ? 'border-indigo-600 bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {cleanLabel(link.label)}
                  </Link>
                ) : (
                  <span key={i} className="rounded border bg-gray-100 px-3 py-1 text-sm text-gray-400">
                    {cleanLabel(link.label)}
                  </span>
                )
              )}
            </div>
          </>
        )}
      </div>
    </AuthenticatedLayout>
  );
}