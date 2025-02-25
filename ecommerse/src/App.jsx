// import { SideBarProvider } from '@/contexts/SideBar';
import Sidebar from '@components/Sidebar/Sidebar';
import routers from '@routers/routers';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import { ToasProvider } from '@/contexts/ToasProvider';

function App() {
    return (
        <ToasProvider>
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
        </ToasProvider>
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
