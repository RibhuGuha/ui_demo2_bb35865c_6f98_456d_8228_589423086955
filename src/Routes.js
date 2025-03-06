import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
PetCareCenterTiles, 
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/demo2/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />

                <Route path="/pcc1/tiles" element={<PetCareCenterTiles {...props} title={'PetCareCenter Tiles'} />} />
        </Routes>
    )

};

export default Component;
