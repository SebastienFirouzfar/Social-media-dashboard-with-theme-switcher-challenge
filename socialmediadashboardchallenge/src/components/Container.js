import React from 'react'
import "../App.scss"
import {listDashboard} from "../data/dataDashboardSocialMedia"
import {ListSocialMedias} from "../components/ListSocialMedia"
export const Container = () => {
    return (
        <div>
            <ListSocialMedias data={listDashboard}/>
        </div>
    )
}

export default Container