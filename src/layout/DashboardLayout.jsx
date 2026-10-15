import React from 'react'
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"


const DashboardLayout = () => {
    return (
        <>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
            </SidebarInset>
        </>
    )
}

export default DashboardLayout
