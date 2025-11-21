import { useContext } from "react";
import { LevelContext } from "../Context/LevelContext";
// export default function Section({ children }) {
//   const level = useContext(LevelContext)
//   return (
//     <section className="section">
//       <LevelContext.Provider value={level + 1}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext value={level + 1}>
        {children}
      </LevelContext>
    </section>
  );
}
