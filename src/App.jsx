import Nevebar from './components/Nevebar';
import Banar from './components/Banar';
import Futar from './components/Futar';
import TeknologiKard from './components/TeknologiKard';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Nevebar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Banar />
        <TeknologiKard/>
      </main>

      <Futar />
    </div>
  );
}

export default App;