

const navlink = [
  { href: "#about", labal: "About" },
  { href: "#project", labal: "Project" },
  { href: "#contact", labal: "Contact" },
  { href: "#experience", labal: "Experience" },
]

export const Navbar = () => {
  return (
    
    <div>
       {/* Top Bar */}
      <div className="bg-[#5EAC3D] text-white  py-0.5 text-lg">
        <div className="max-w-7xl mx-auto flex justify-between px-4 py-2">
          <div className="flex gap-4">
            <span>Thursday, March 26, 2021</span>
            <span>support@example.com</span>
            <span>684 555-0102 490</span>
          </div>

          <div className="flex gap-4 items-center">
            <button className="text-green-600 font-medium">
              Booking Now
            </button>
            <span>FB</span>
            <span>TW</span>
            <span>IN</span>
          </div>
        </div>
      </div>
      <div className="header relative flex items-center p-4 container mx-auto">

        {/* LOGO (left) */}
        <div className="nav font-extrabold text-2xl">
          PM.
        </div>

        {/* NAV LINKS (center) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-4 font-semibold">
            {navlink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2"
              >
                {link.labal}
              </a>
            ))}
          </div>
        </div>

        {/* BUTTONS (right) */}
        <div className="ml-auto flex gap-3">
          <button className="px-4 py-2 border rounded-lg">
            Register
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Sign In
          </button>
        </div>

      </div>
    </div>
  )
}



// ------------------------------------

