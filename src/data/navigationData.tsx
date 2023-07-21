import { DashboardIcon, AssessmentIcon, LibraryIcon, RoundStatusIcon } from "../assets/icons/index"


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