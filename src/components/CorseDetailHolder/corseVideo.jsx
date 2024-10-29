const CorseVideo = () => {
  return (
    <div className="w-full , h-full rounded-3xl bg-white px-16 py-9">
      <div  className="text-5xl font-normal">ویدئو های دوره </div>
      <video className="h-full w-full rounded-3xl" controls>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default CorseVideo;
