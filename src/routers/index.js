import Profile from "../pages/Profile";
import ChangePhoto from "../pages/ChangePhoto";
import TakePhoto from "../pages/TakePhoto";
import CropPhoto from "../pages/CropPhoto";

const routes = [{
    path: "/",
    exact: true,
    component: Profile
},
{
    path: "/change-photo",
    component: ChangePhoto
},
{
    path: "/take-photo",
    component: TakePhoto
},
{
    path: "/crop-photo",
    component: CropPhoto
}
];

export default routes