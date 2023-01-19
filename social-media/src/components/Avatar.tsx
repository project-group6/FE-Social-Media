import { useRef, useState } from "react";

export default function Avatar() {
  // const [open, setOpen] = useState(false);
  // const Menus = ["Profile", "Your apps", "Settings", "Logout"];

  // // solution
  // const menuRef = useRef();
  // const imgRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current && e.target !== imgRef.current) {
  //     setOpen(false);
  //   }
  // });

  //   let width = "w-12";
  //   if (size === "lg") {
  //     width = "w-24 md:w-36";
  //   }
  return (
    // <div className="h-screen bg-gray-200 flex justify-center pt-14">
    //   <div className="relative">
    //     <img
    //       /*ref={imgRef}*/
    //       onClick={() => setOpen(!open)}
    //       src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    //       alt="user"
    //       className="h-20 w-20 object-cover border-4 border-gray-400 rounded-full cursor-pointer"
    //     />
    //     {open && (
    //       <div /*ref={menuRef}*/ className="bg-white p-4 w-52 shadow-lg absolute -left-14 top-24">
    //         <ul>
    //           {Menus.map((menu) => (
    //             <li onClick={() => setOpen(false)} className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100" key={menu}>
    //               {menu}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className={`w-12 rounded-full overflow-hidden`}>
      <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
    </div>
  );
}
