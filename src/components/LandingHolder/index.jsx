import React from 'react'
import HeroSection from './HeroSection'
import Services from './ServiceSection/Services'
import View from './ViewSection/View'
import Show from './ShowSection/Show'
import Teachers from './TeachersSection/Teachers'
import Inbox from './InboxSection/Inbox'


 const index = () => {
  return (
    <div>
        <HeroSection />
        <Services/>
        <View/>
        <Show/>
        <Teachers/>
        <Inbox/>
    </div>
  )
}
export default index