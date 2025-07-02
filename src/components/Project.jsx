const Project = () => {
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <p className="text-2xl">Title</p>
        <div className="flex gap-5 mt-2 text-sand">
          <span>Tag1</span>
          <span>Tag1</span>
          <span>Tag1</span>
        </div>
        <button className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
    </>
  );
};

export default Project;