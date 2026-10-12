export const PRIORITIES = ['Low', 'Medium', 'High', 'Urgent'];
export const STATUSES = ['Open', 'In Progress', 'Resolved', 'Closed'];
export const CATEGORIES = ['Hardware', 'Software', 'Network', 'Account', 'Other'];

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

const inputClass =
  'mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500';

export default function TicketForm({ data, setData, errors, processing, onSubmit, submitLabel }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field label="Title" error={errors.title}>
        <input
          type="text"
          value={data.title}
          onChange={(e) => setData('title', e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field label="Description" error={errors.description}>
        <textarea
          rows="5"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
          className={inputClass}
        />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Field label="Priority" error={errors.priority}>
          <select
            value={data.priority}
            onChange={(e) => setData('priority', e.target.value)}
            className={inputClass}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Status" error={errors.status}>
          <select
            value={data.status}
            onChange={(e) => setData('status', e.target.value)}
            className={inputClass}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Category" error={errors.category}>
          <select
            value={data.category}
            onChange={(e) => setData('category', e.target.value)}
            className={inputClass}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <button
        type="submit"
        disabled={processing}
        className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {processing ? 'Saving...' : submitLabel}
      </button>
    </form>
  );
}