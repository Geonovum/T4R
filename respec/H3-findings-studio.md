## Studio situations

The studio situation focusses on the capabilities of a Digital Twin. Which building blocks do we need to define?    

<img src="./respec/media/capabilities.png" alt="Main capabilities mapped to the Digital Twin Capabilities Periodic Table" width="900">

*Figure 4: Main capabilities mapped to the Digital Twin Capabilities Periodic Table (source: [[NLDT_PP_BB]])*   

<aside class="note">
By Capability in this context we mean the ability to achieve a desired outcome in terms of functionalities of a Digital Twin.

We use this approach to help focus on the requirements, rather than technical solutions that might be provided by solution providers. 
</aside>

These capabilities are based on prior work Geonovum has done: [[NLDT_PP_BB]] In the  report tries to bridge the gap between technical solutions as described in the [Digital Twin Capabilities Periodic Table](https:/www.digitaltwinconsortium.org/initiatives/capabilities-periodic-table/) and the context from which policy makers are operating, often a plan-do-check-act cycle of spatial planning.

### Which capabilities do we need to find, operate and interrogate our data sources?

LDT's typically use a lot of data sources. It really helps to think critically about the separation of data and visualization. What insights do you need to create from your data or simulation results and which type of data sources are best suited for those insights? Timeseries, GIS, Game-engines, Business Intelligence satellite imagery or sensor data all have their own data structures and optimal data management practices. There are different open standards specifically suited for the various types of data sources.

<img src="./respec/media/game_engines.png" alt="Game engines" width="900">

*Figure 5: Game engines are emerging as a efficient way to visualise and enhance Digital Twins.*

__Best practices__

- Have a datacentric mind, rather than an application centric mind. Address the use case by defining the necessary data sources and analysis needed, and address the best suited application to present the use case as a separate subject. 
- Have [FAIR](https://www.go-fair.org/fair-principles/) (Findable, Accessible, Interoperable, Re-usable) principles in mind. Design the system in such a way that the data sources being used can be operated on irrespective of the visualization component in scope.

__Lessons Learned__

For all organizations this means you want to be able to create data sources that can be used in multiple platforms. For example, if an environmental research institute carries out a study you want the results not only in PDF and not only in a bespoke interactive viewer provided by the research institute, but you want the results in such a format that you can integrate them in the visualization tool of choice within the organization. Or you want to be able to feed those results into another model to create a combined insight from different sources.

Prioritize interoperability by integrating diverse data (GIS, sensors, IoT, BIM, CAD) into a unified or centralised data platform and findable in a catalog.

The use of IoT in Digital Twins is undisputed, and Open Standards are available ([SensorThings API OGC](https://www.ogc.org/standards/sensorthings/), [SSN and SOSA W3C](https://www.w3.org/TR/vocab-ssn/) - all based of the ISO 19156:2023 - Observations, measurements and samples).

- Data First – start to build models before formalising the data governance process. It could mean that you have to retrospectively go back and catalogue all our data. 

- Note: To handle multiple IoT sources (APIs) a middleware is required.
The widespread use of GIS and 3D modelling tools underscores the importance of spatial analysis in urban planning and LDT development.

- The adoption of game engines highlights the trend towards more immersive and interactive digital twin experiences. 

- Dashboard solutions are becoming increasingly important for decision-making and public engagement, with cities investing in tools that enhance data accessibility and visualization.

<img src="./respec/media/immersive_twin.png" alt="Immersive twin" width="900">

*Figure 6: DCU Immersive Real Time Digital Twin*

### Which capabilities do we need to combine, validate and verify our data sources?

Some Digital Twins are able to process (measurement) data in real time, monitor (to see whether policy also has the desired effect in the policy cycle), and optionally respond to changes. Measurements are kept so that they can be used to make statements about a series from the past or, if possible, trends in indicators can be seen.

The capability to reproduce the circumstances in which a policy decision is made, through a Digital Twin, is very important:

1. In a rule of law, decisions are taken on the basis of a legal framework and linked indicators and 
2. The Digital Twin is really seen as a policy tool that can be trusted and helps in efficiency

This means that, apart from arranging the appropriate governance processes, the technical system needs to be able to address these requirements.

__Best practices__

- Well defined, clearly scoped interfaces help with the interoperability between components. Specifically, when more complex capabilities like the ability to reproduce circumstances come into play, well scoped interfaces are important.

- The OASC MIM's can help identify applicable levels of interoperability. For more information see the [OASC MIM](https://mims.oascities.org/) site to identify which ‘minimal interoperability mechanism’ might be helpful.

- So, for example if time travel (one of the capabilities in the framework) is a requirement, this needs to be designed into the data structure, the controls in the visualization as well as in the interface between data and visualization.

<img src="./respec/media/3d_building_geometry.png" alt="3D Building Geometry" width="900">

*Figure 7: Visualization of and interaction with 3D building geometries (VCS 3DCityDB), combining Geo and BIM data.*

<img src="./respec/media/point_clouds.png" alt="Point Clouds" width="900">

*Figure 8: Point clouds visualization in Bruz (Rennes Metropole) by VCS, TUM, IGN, Rennes Metropole in context of the FCP1 of the OGC.*

### Which capabilities do we need to gain insights from our data sources?

Computation components are an essential part of a digital twin. It defines the difference between 'just' a visualization of a dataset and the ability to interact with the data and perform scenario analysis. This interactive capability is what provides insights. It is also one of the more complex parts of a digital twin, and not just from a technical standpoint. The translation from indicators based in policy making into actionable indicators in a digital twin is a complex topic. This is the part where IT people and policy makers need to understand each other, which is the main topic of the 'Policy processes and building blocks for Digital Twins' [NLDT_PP_BB] report.

__Best practices__

- Thinking in terms of capabilities or functions enables you to compare different building blocks or solutions from vendors. In that way it facilitates working towards value creation, rather than solution adoption.

- Do a requirements analysis based on the identified capabilities and compare different vendors and their solutions based on those requirements.

<img src="./respec/media/multi-dtwin_toolbox.png" alt="Multi D-twin Toolbox" width="900">

*Figure 9: Example of Leiedal’s Multi D-twin Toolbox*

Taken from Leiedal’s Multi-D twin Toolbox (Iso Cube) - maintain an overview of the global ecosystem, the data, processes and visualisation elements and how they interact – giving great insight into data sources and data-ecosystem. Equivalent to the Digital Twin Consortium periodic Table.


### Which capabilities do we need to make sure we can trust the insights we get from our data sources?

A Digital Twin stands (or falls) with the accurate representation (according to agreements and rules) of reality. All data and information that feeds the Digital Twin should be tested against agreed quality requirements.

Data will never have a ‘perfect quality’ (completely error free), so user expectations must be set accordingly.

Trust is also gained through formal agreements and frameworks. For example, the user must make himself known in the system (Identity & Access Management), is logged in and APIs are managed (via gateway functionality). Confidential data is exchanged by means of dataspace standards, where policy and data-use agreements are in place before data exchange.

<img src="./respec/media/flood_depth_classification.png" alt="Flood Depth Classification" width="900">

*Figure 10: Flood depth classification (Rennes Metropole)*

<img src="./respec/media/flood_depth_classification2.png" alt="Flood Depth Classification" width="900">

*Figure 11: Flood depth classification (Rennes Metropole) requires high quality data (Remote Sensing Solutions Inc., U.S.A) and VCS.*

__Best practices__

Specify expected data quality measures upfront so you can evaluate the quality of the data against those measures. An LDT for construction planning might have very different spatial resolution requirements than an LDT for 	regional transportation capacity for example.

- Reach out to policy makers, make sure the results from a DT a relateable to the policies they are supposed to make understandable.

- •	Put extra effort in the understandability of the results, use UX (User experience) specialists to make sure the system conveys the intended message. While design of a UX is out of scope for a technical framework, it is important to note that the technical stack needs the ability to be adapted to an appropriate User Interface for the intended audience. By following the WCAG2.2 requirements the usability of the UX for all should be safe guarded. 

### How do we communicate our insights to our stakeholders?

A great strength of a Digital Twin is the experience aspect. These experiences go beyond simply observing data and models; They enable people to virtually experiment, learn and understand how something looks or functions. This is often called XR, extended reality, the umbrella term for AR (Augmented Reality, digital overlay over the real world) and VR (Virtual Reality, immersive virtual environment).  Interaction can take place in different ways. User-friendliness and intuitive interface that makes it easy for users to navigate and perform the necessary actions are also important.

__Best practices__

- Understand your stakeholder needs. The experience needs to be useful for the target audience. Be mindful that for experienced users it might be obvious how to pan and zoom in a map or that there is a right-mouse click context menu to interact with an application, but that functionalities might not always be obvious to end-users. We experience a big gap between policy makers and 'tech people' and the only way to bridge that gap is to pay specific attention to it.

- Pay attention to the accessibility of your solution. While sometimes challenging in map viewers, following [WCAG (Web Content Accessibility Guidelines)](https://www.w3.org/TR/WCAG22/) is a best practice and in some cases mandatory.

### How do we manage the complexity of a solution and make sure we can 'mix and match' different building blocks?

By splitting the system into different building blocks (which are based on standards and interoperable interfaces) we make sure the system is flexible. We can use different visualization solutions with a processing backend, and we can upgrade certain parts without needing to upgrade the complete system.

__Best practices__

- Adopting an architecture that distinguishes similar boundaries between components enables interoperability and understanding between different organizations, or between departments within organizations, because a similar blueprint is used.

- Work towards standardized analysis for well-defined policy guidelines (see example below)

__Lessons Learned__

- Critical success factors comprise of concrete, understandable building blocks. By adopting an agile mindset a roadmap can be realized in smaller steps which deliver value in their own rights.

- The ability to 'add-up' quantifiable key performance indicators over multiple areas or organizations is something that is not widely available yet. If you do have this capability developed from a policy making perspective, it also needs to translate into the technical framework. The success of an interoperable system is often dependent on details in the implementation, like using the same units of measure or coordinate system.
 
    What we mean by this is the way a policy guideline is 'digitized' in a way that you can run a standardized analysis for the question. An example is the implementation of the '3-30-300 rule', this is a rule about the amount of green in the city. 3-30-300 stands for: every citizen should be able to see 3 trees, 30% of the area should be shaded and there should be a (small) park within 300 meters. Which datasets do we use for this analysis? How do we calculate the sightlines? How do we calculate the shadow percentages?

---
