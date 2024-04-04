function App() {




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.AddNote.value);
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className=" flex flex-col items-center">
          <div className="flex flex-col pb-10 justify-center items-center gap-5">
            <h1 className="font-bold text-black text-nowrap text-[60px] ">
              SQL Refresher
            </h1>
            <p>Let's review some SQL concepts!</p>
          </div>

          <form onSubmit={handleSubmit} >
            <div className="flex gap-5">
              <button type="submit">Add Note</button>
              <input
                type="text"
                name="AddNote"
                required
                className="border  pl-3 border-black rounded-xl"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
