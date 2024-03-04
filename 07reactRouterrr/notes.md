=> <Route path='*' element={<div>Not Found</div>} />
        Ye uske liye agar user random url par jaaye toh error dikha do

=> <Route path='user/' element={<User />} > 
        <Route path=':userid' element={<User />}/>
   </Route>
        Ye jab hame dynamic url pakadna ho jaise /user/1234567890, /user/1234567891

=>  <Route
       loader={githubInfoLoader}
       path='github' 
       element={<Github />} />
        Ye maan lo user click se phle hover kar rha ho usi waqt resource (githubInfoLoader) load ho jaaye (idhar ham github se data fetch kar rhe hai)

=>  <Link to="/" className="flex items-center">
        <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="mr-3 h-12"
            alt="Logo"
        />
    </Link>
        Ham react me a ka use ni karte hai kyuki uska matlab refresh hota hai isiliye ham Link ka use karte hai (href ki jagah to use hota hai) className toh tailwindcss ka hai

=>  <NavLink
        to="/"
        className={({isActive, isPending}) =>
            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
            ${isActive ? "text-orange-700" :
            "text-gray-700" }
            lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
    >
        Home
    </NavLink>
        Link hi ki tarah NavLink bhi hai lekin jab hame pata krna ho ki wo link active hai ya pending (taaki uske hisaab se kaam ho ske) tab ham iska use karte hai
        for eg. Home About Users aisa header me hai links ab agar home par hai ham toh Home ka color alag kar skte baaki ka ni hoga bas yi kaam hai mota moti

=> What is Outlet ?
        Outlet provides a way for nested routes to render their children correctly.
        
        In React Router, the <Outlet> component is used to render the child routes of the current route. It is typically used within a layout or parent component that represents a common structure for multiple pages in your application.

        Usage within Layout component:
        <Header />: This represents the header component of your layout.
        <Outlet />: This is where the content of the child routes will be inserted.
        <Footer />: This represents the footer component of your layout.

        By using <Outlet> in the Layout component, you are allowing child routes to be rendered within the layout structure. For example, if you have routes nested inside the '/' route (as defined in your router configuration), the components associated with those nested routes will be rendered within the <Outlet> in the Layout component. This allows you to create a consistent layout for different sections of your application while dynamically rendering the content based on the current route.






