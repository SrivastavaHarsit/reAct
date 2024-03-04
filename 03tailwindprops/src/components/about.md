Basically ham components banate hai 
taaki usko reuse kar ske

for eg
    1 card template ka html banaya usko 1 react function me return kara
    ab multiple card templates ke liye bas component ko import kar lo
    but har cheez same hoga ni bhale hi structure same hai par content alag honge
    toh wo ham props ke through takle karte hai


Basically components me props agar object ya array bhejna hai toh usko return se phle likh kar js inject karna padega like niche likha hai
line 27.

function App() {
  const [count, setCount] = useState(0);
  let newArr = [1, 2, 3];
  let obj = {
    name: "hi",
    ....
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-10
      rounded-xl mb-5'>Tailwind test</h1>

      <Card username="Maut" btnTxt="Fuck Me myArr={newArr} nyObj={obj}"/>
      <Card username="Paida"/>

    </>
  )
}