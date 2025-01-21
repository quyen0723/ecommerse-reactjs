// import { SideBarProvider } from '@/contexts/SideBar';
import Sidebar from '@components/Sidebar/Sidebar';
import routers from '@routers/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBarProvider } from '@/contexts/SideBarProvider';

function App() {
    return (
        <SideBarProvider>
            <Sidebar />

            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {routers.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    element={<item.component />}
                                />
                            );
                        })}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </SideBarProvider>
    );
}

export default App;

{
    /* <MainLayout> */
}
{
    /* Content
                <MyFooter />  */
}
{
    /* <MyButton /> */
}
{
    /* </MainLayout> */
}
