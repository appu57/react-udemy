const router =()=>{
    <BrowserRouter>
    <div className="browser">
    <NavBar/>
    {/* <Main/> */} {/* how to use map instead of ngFor */}
    <CoursesCart/>  {/* Parent to Child */}
    <Login/>
    
    <Routes>
    {/* <Route path="*" Component={CoursesCart}></Route> to show 404 page */}{/* Acts like auth gaurd */}
    <Route path="home" exact Component={CoursesCart} render ={(isLogged)=>{<Login isLogged={isLogged} updateMethod={updateMethod}/>
    }}/>
    <Route path="prod/:id" exact Component={coursesCart}/>{/*useParams() is used to get the route parameters in function , withi class call coomponentOnMount() and then this.props.math.parama.id */}
    </Routes>
</div>
</BrowserRouter>
}
export default router;