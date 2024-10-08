

const Button = (props:React.PropsWithChildren) => {
  return (
    <div>
     <button className="relative py-2 px-3 rounded-lg font-medium text-sm 
     bg-gradient-to-b from-[#1e0b3e] to-[#6110d9]  shadow-[0px_0px_12px_#8c45ff]">
        <div className="absolute inset-0 border rounded-lg ">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40  [mask-image:linear-gradient(to_top_black,transparent)]"></div>
         <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7_insert)]"></div>
        </div>
        <span>{props.children}</span>
     </button>
    </div>
  )
}

export default Button
