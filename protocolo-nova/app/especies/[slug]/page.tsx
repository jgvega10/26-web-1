import { Character } from "@/app/types/character";


export default async function EspecieDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Aquí el parámetro 'slug' es parte de la URL, no del ?query
  // Path params species/Alien/


  //1. Consumir la api GET https://rickandmortyapi.com/api/character/?species=${slug}

  const apiUrl = `https://rickandmortyapi.com/api/character/?species=${slug}`

  const res = await fetch(apiUrl)
  const characters = await res.json()
  // 3. Mapeo para que aparezcan en pantalla ✅
  //2. Asignar la respuesta 
  //3. Mostrar la UI   
  
  

  return (
    <div className="p-10">
      <h2 className="text-3xl font-black text-emerald-500 uppercase mb-6">
        Análisis de Especie: {slug}
      </h2>
      {/* Mapeo similar al anterior... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.results?.map((char: Character) => (
          <div key={char.id} className="border border-slate-800 bg-slate-900/50 p-4 rounded-xl">
              <img src={char.image} alt={char.name} className="w-full grayscale hover:grayscale-0 transition-all mb-4 rounded-lg" />
              <h3 className="text-emerald-400 font-bold">{char.name}</h3>
              <p className="text-[10px] text-slate-500 uppercase">{char.species} - {char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
