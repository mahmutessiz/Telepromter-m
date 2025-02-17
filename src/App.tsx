import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [scrollYValue, setScrollYValue] = useState(0);

  const timer = setTimeout(() => {
    setScrollYValue((scrollYValue) => scrollYValue - 10);
    console.log(scrollYValue);
  }, 1000);

useEffect(() => {
    if (Math.abs(scrollYValue) > 150) {
      
      clearTimeout(timer);
      console.log("clear");
      
    }
}, [scrollYValue]);

  return (
    <main className="container">
     <div
     style={{
       width: "200px",
       height: "200px",
       backgroundColor: "yellow",
       overflow: "hidden",
       textAlign: "center"
     }}
     >
      <p
      style={{
               transform: `translateY(${scrollYValue}px)`,
               padding: "10px"
      }}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus suscipit accusamus, quisquam, recusandae laborum earum provident temporibus ex asperiores, ipsum in impedit sapiente! Est necessitatibus aliquid a animi ad totam quo earum, nihil quam temporibus voluptates similique excepturi doloribus ipsa fuga tenetur tempore eaque iure, veritatis veniam. Provident quo, explicabo, ipsam beatae sequi qui rerum ipsum alias dolore illo at error. Quod laudantium beatae libero eum explicabo voluptatibus, alias harum tenetur sit, voluptates provident iusto, maxime atque fugit eligendi est blanditiis ut voluptatem delectus! Quo repellat nulla dicta doloremque blanditiis adipisci cupiditate magni, cumque impedit id pariatur, deserunt velit expedita minus tempore! Possimus ab mollitia, cumque explicabo reprehenderit aspernatur veritatis assumenda id dolores consequuntur accusamus cupiditate numquam vitae consequatur non fuga iure natus illum. Nulla, sapiente placeat! Possimus aut commodi ex ab dolor, neque rem harum veniam accusamus nam earum dolorem omnis cum pariatur dicta facere amet velit praesentium ad. Sapiente accusamus fugit enim quasi quae accusantium praesentium nemo aspernatur vero quidem ipsam atque, dolorum at, recusandae odio ducimus quibusdam incidunt eum perferendis a! Deserunt odio aliquam aperiam? Quo consequatur ut, perspiciatis dolores, totam corporis aliquam aut aliquid nesciunt mollitia doloremque minima vitae magni quia unde ipsa at accusamus.</p>
     </div>
    </main>
  );
}

export default App;
