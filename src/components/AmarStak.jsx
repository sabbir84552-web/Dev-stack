export default function AmarStak({ amarStak, stakThekeMucheFelo, shobMucheFelo }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-xs sticky top-20">
      {/* Sidebar Header */}
      <div className="mb-4">
        <h2 className="font-bold text-slate-900 text-lg">Your Stack</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          {amarStak.length} {amarStak.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>
      </div>

      {/* bacai kora Tech Item List */}
      <div className="space-y-2 mb-6 max-h-[360px] overflow-y-auto">
        {amarStak.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs border border-dashed border-slate-200 rounded-lg">
            No technologies added yet.
          </div>
        ) : (
          amarStak.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 border border-slate-100 rounded-lg hover:border-slate-200 transition"
            >
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-slate-800">{item.name}</span>
              </div>
              <button
                onClick={() => stakThekeMucheFelo(item.id)}
                className="text-slate-400 hover:text-red-500 p-1 text-sm transition"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {/* click kora sob gulare muchete use hoy */}
      {amarStak.length > 0 && (
        <button
          onClick={shobMucheFelo}
          className="w-full py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-lg text-xs font-semibold transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
}