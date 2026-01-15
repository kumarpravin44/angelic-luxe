import React from 'react'
import HeroBanner from '../component/HeroBanner'
import ServicesCard from '../component/ServicesCard'
import GalleryPreview from '../component/GalleryPreview'
import PricingCTA from '../component/PricingCTA'

export default function Home() {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <ServicesCard></ServicesCard>
            <GalleryPreview></GalleryPreview>
            <PricingCTA></PricingCTA>
        </div>
    )
}
