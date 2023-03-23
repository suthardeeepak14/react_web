// function greeting(name) {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;
//   if (hours >= 4 && hours < 12) {
//     timeOfDay = "Morning";
//   } else if (hours >= 12 && hours < 17) {
//     timeOfDay = "Afternoon";
//   } else if (hours >= 17 && hours < 20) {
//     timeOfDay = "Evening";
//   } else {
//     timeOfDay = "night";
//   }
//   return `good ${timeOfDay}, ${name}`;
// }
// greeting("kittu");


export default function App()
const [isGoingOut,setIsGoingOut]=React.useState(true)

function changeMind(){
    setIsGoingOut(prevState=> !prevState)
}
return(
    <div className="state">
        <h1 className="state-title">Do I feel like going out tonight?</h1>
        <div onClick={changeMind} className="state-value">
            <h1>{isGoingOut? "Yes":"No"}</h1>
        </div>
    </div>
)


