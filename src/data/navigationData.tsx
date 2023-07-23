import { DashboardIcon, AssessmentIcon, LibraryIcon, RoundStatusIcon } from "../assets/index"

//navigation bar data
const navItems = [
    {
        image: DashboardIcon,
        title: "Dashboard"
    },
    { 
        image: AssessmentIcon,
        title: "Assessment"
    },
    {
        image: LibraryIcon,        
        title: "My Library"  
    }
]

const adminItem = {
    image: RoundStatusIcon,
    title: "Round Status"
}

export {navItems, adminItem}