// src/component/TagCloudComponent.jsx
import React, { useEffect, useState } from 'react';
import { TagCloud } from 'TagCloud'



 // Initialize TagCloud
 const container = '.tagcloud';
 const texts = [
   'ITIL Certification', 'CyberArk Defender', 'CompTIA A+', 'MD-102', 'CompTIA Security+', 'SC-300',
    'ITIL Certification', 'CyberArk Defender', 'CompTIA A+', 'MD-102', 'CompTIA Security+', 'SC-300',
    'ITIL Certification', 'CyberArk Defender', 'CompTIA A+', 'MD-102', 'CompTIA Security+', 'SC-300',
 ];
 
 const options = {
   radius: 400, // Smaller radius for a more compact sphere
   maxSpeed: 'slow', // Smoother animation
   initSpeed: 'slow', // Smoother initial speed
   direction: 135, // More balanced 3D rotation
   keep: true, // Keep animation running
   useContainerInlineStyles: false,
   reverseDirection:true,
   
   containerClass: 'tagcloud-container',
   itemClass: 'tagcloud-item',
 };

 TagCloud(container, texts, options);

export default TagCloudComponent;