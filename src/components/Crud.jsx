const data = [
    {
      id: 0,
      title: "Las palomitas del cine no me gustaron",
      description: "Les falta más salsa"
    },
    {
      id: 1,
      title: "Las palomitas del cine no me gustaron",
      description: "Les falta más salsa"
    },
    {
      id: 2,
      title: "Las palomitas del cine no me gustaron",
      description: "Les falta más salsa"
    },
    {
      id: 3,
      title: "Las palomitas del cine no me gustaron",
      description: "Les falta más salsa"
    }
  ];
  
  const Comment = ({ id, title, description }) => {
    console.log("id", id);
    return (
      <article className="flex justify-between py-5 border-b border-gray-200">
        <div className="max-w-6xl">
          <h3 className="text-lg leading-8 font-medium text-gray-900">{title}</h3>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
        </div>
        <div className="mt-3 flex">
          <button className="inline-flex ml-6 max-h-12 items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Eliminar
          </button>
          <button className="inline-flex ml-6 max-h-12 items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Editar
          </button>
        </div>
      </article>
    );
  };
  
  export default function Crud() {
    return (
      <>
        {/* TÍTULO */}
        <div className="bg-blue-400 py-4">
          <h2 className="text-center text-3xl text-gray-900 sm:text-4xl">
            Caja de comentarios
          </h2>
        </div>
        {/* FORMULARIO */}
        <div className="max-w-5xl mx-auto px-6 pb-6">
          <form>
            <h3>Asunto</h3>
            <input className="border shadow-sm mt-2 rounded-md border-gray-200 w-full" />
            <h3>Descripción</h3>
            <textarea className="mt-2 border shadow-sm rounded-md border-gray-200 w-full" />
          </form>
        </div>
  
        {/* LISTADO DE COMENTARIOS */}
        <div className="max-w-5xl mx-auto px-6">
          {data.map((e) => (
            <Comment
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
            />
          ))}
        </div>
      </>
    );
  }
  