
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section>
      <div className="container">
        <h2></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam reiciendis labore corporis dolorum consequatur
        </p>
        {tabs.map((tab) => (
          <div key={tab.title} >

          </div>
        ))}
      </div>
    </section>
  )
  ;
};
