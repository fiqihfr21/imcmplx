import { useState } from "react";
import { Navbar } from "../../component/navbar"
import { AppRouter } from "../../routes/app"

export const MasterLayout = () => {
    const [accounts, setAccounts] = useState([]);
    return <div className="relative">
        <Navbar accounts={accounts} setAccounts={setAccounts}/>
        <AppRouter/>
    </div>
}