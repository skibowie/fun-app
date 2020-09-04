import React, { useState } from 'react';
import {SimpleMenu} from './components/SimpleMenu'
import "./styles.scss"
import {Calculator } from "./calculator"
import { Calendar} from "./calendar";
import { Recipes} from "./recipes";
import { Contact } from "./contact";

export const Dashboard = () => {
    const [view, setView] = useState("calendar")
    return <div className='main_dashboard'>
        <SimpleMenu onChange={(value) => setView(value)}/>
        {view === "calculator" && <Calculator />}
        {view === "calendar" && <Calendar />}
        {view === "recipes" && <Recipes />}
        {view === "contact" && <Contact />}
    </div>
}



