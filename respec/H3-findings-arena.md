## Arena situations

The Arena situation is all about the questions regarding the actual implementation of capabilities in applications and processes. This aligns with the ArchiMate Business and Application Layer.

### What kind of visualisation interface do I need to communicate my insights to the users? 

Does it need to be a 3D viewer, or is a 2D viewer or maybe even a dashboard sufficient?

Not all LDT's need to be 3D. It really depends on the use case, user requirements and purpose of the solution. Stemming from the earlier situation questions (Lab and Studio), you should have a proper understanding of the requirements and are now able to answer this more detailed question about the needed visualization environment.

__Best practices__

- A responsive, user-friendly 3D environment helps with the adoption of the technology stack. If you do require a 3D environment, pay special attention to the user friendliness of the environment and make sure it is not just a 'gimmick' but actually an environment that can communicate the relevant insights. For example, navigating a 3D environment is more complex from a user interface perspective.

__Lessons Learned__

- An accessible 3D environment can help very much in creating support in a community and explain proposed scenarios. Bear in mind that a 'high definition' simulated environment can also set certain expectations that you do not want to set just yet. Sometimes a generic, not too detailed scene is advisable to communicate the uncertainty around future scenarios.

- Coordinate system alignment is not a given. While solutions might start isolated, once you want to combine different parts together it is imperative to make sure visualisations actually align by adhering to collective coordination system definitions.
 

### How does my data storage landscape look like? 
Which tools do I need to provide the right dataservices to my models or visualisation tools?

In the Studio situation we paid attention to the required types of data. Now it is time to really think about the technical architecture of the data storage landscape. Depending on your IT environment (Cloud vs 'on premise') different options are available. In cloud environments object storage solutions in combination with cloud native formats like (geo)parquet (for vector data) or cloud optimized geotiff (for raster data) can be a very cost-effective, high-performance option.

__Best practices__

- A cloud based technology stack has different requirements compared to a 'classic' on-premise technology stack. 
    
__Lessons Learned__

- Cloud native, serverless components bring vendor lock-in (Azure Blob Storage vs AWS S3, Azure Data Factory vs AWS Glue). Containerable, 'independent' solutions need a higher skill set but enable flexibility.

- In cloud environments block-based storage solutions (like AWS S3 or Azure Blob Storage) are cost effective, flexible and easy to manage but require different interfaces than the classical file-based access paradigm that you typically use in on premise database type solutions.

- Designing a cost effective scalable and manageable cloud solution requires a different skillset than the design of a ‘classic’ (client-server type) on premise solution. Look for the appropriate skillset to design a cloud solution.

- The cloud pattern does require data and processes to sit closer together and avoid expensive and slow data ingress and egress from the cloud.

### How do I make sure my users can actually find the right datasources, models, dashboards?
What type of catalogue do I need, how proficient are my users in searching and finding products?

__Best practices__
The use of OGC and W3C standards to describe and expose data sources helps interoperability, understanding and reusability of those data sources.

More specific:
- [DCAT-AP](https://semiceu.github.io/DCAT-AP/releases/3.0.0/) (European dcat application profile) and relevant extension to the European profile. ([DCAT-AP High Value Datasets](https://semiceu.github.io/DCAT-AP/releases/3.0.0-hvd/), GeoDCAT-AP, MobilityDCAT-AP, DCAT-AP-NL, ...) Application profiles specify which properties to use and prescribe code lists to choose values from. By using the appropriate European application profiles you adhere to standards like [Inspire](https://knowledge-base.inspire.ec.europa.eu/overview_en) or the [EU High-Value Dataset implementing regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0138)
- [OGC API records](https://docs.ogc.org/DRAFTS/20-004r1.html) for describing catalogues 
- [SPARQL](https://www.w3.org/TR/sparql11-query/) for querying linked data

__Lessons Learned__

- There are a lot of different data catalog offerings available. Industry leaders (like Atlan, Collibra, Datahub and others) have impressive features, but end users might struggle with the richness of these offerings, they might be better suited for data engineer type roles. Depending on the size of your organization and the type of products you want to provide to your users, solutions specifically tailored to certain user groups might be in order.

- It helps AI’s to easily find data (and especially metadata) for training purposes as well as for neural network execution. The key to AI use of data is well designed, complete and maintained metadata (that could be generated by AI!)


### How do I make sure the different components in my landscape can actually 'talk' to eachother?

The use of open standards has already been addressed in the Lab and Studio situation. In the actual implementation, the devil is in the details. Pay attention to version differences, conformance of implementations or vendor specific implementations of protocols.

<img src="./respec/media/heat_stress.png" alt="Heat Stress" width="900">

*Figure 12: Heat stress measurement of the municipality of Utrecht in the context of ‘green neighbourhood, cool neighbourhood and the EU project ‘urban relief’ (source: [3d.netherlands.eu](https://www.3d.netherlands.eu/)), where different components interact with each other.*

<img src="./respec/media/water_flow.png" alt="Heat Stress" width="900">

*Figure 13: Water flows are displayed in real time in the IMAGEM Planspace application (source: Almere, Imagem and Nelen & Schuurmans), where data and calculation models interact.*

__Best practices__

Use OGC API standards to facilitate interoperability

- [OGC API Features](https://ogcapi.ogc.org/features/), [Tiles](https://ogcapi.ogc.org/tiles/), [Maps](https://ogcapi.ogc.org/maps/)
- [OGC API Processes](https://ogcapi.ogc.org/processes/)
- [OGC SensorThings API](https://www.ogc.org/standards/sensorthings/)
- [W3C SOSA SSN](https://www.w3.org/TR/vocab-ssn/)


__Lessons Learned__

- While an architecture based on OGC API's is viable in many use cases, in more advanced scenario's involving for example high throughput 3D analysis and rendering Cloud Native and other standards are also applicable. Bear in mind, that even then a separation of concerns between processing and visualization is a sound architectural principle.

- These interoperability questions do not only involve technical standards but also require semantic harmonization. To be able to 'add' different metrics together, they need to be comparable and aligned. One way to address this is to standardize on common vocabularies.

- AI’s (executing the neural network) can be packages in an API processes and can be called procedurally in a chain of processes (orchestration).

__Future work__

- By exposing both data and processes through well-known API’s, AI’s can be trained to include the data (and process output) from the various sources.

- AI’s can combine data based on discovered patterns

- What some dedicated domain models (e.g. mobility, climate) now do procedurally (incl geo data), AI’s can be trained and used to discover pattern based on the data from the DT.


### Which systems do I need to have in place to support my data governance processes?
Make sure your technical systems align with the target operating model of your organisation. 

 [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law): _"Organizations which design systems (in the broad sense used here) are constrained to produce designs which are copies of the communication structures of these organizations."_

__Best practices__

- In modern cloud environments, software components are designed to be easily packaged into containers (like Docker). This makes them simple for developers to work with, deploy, and manage. We should think of these components as disposable and interchangeable, like cattle in a herd, rather than unique and irreplaceable "pets."

- Components (Products) are loosely bound and talk to each other over API’s. Design your systems decoupled. That is not to say, data and visualization should always be 'physically' separated.

__Lessons Learned__

- Don't pre-optimize. The speed of innovation means future needs are often unclear. Over-engineering for potential features can hinder agility. Instead, prioritize building the current requirements effectively ("just enough") to allow for future adaptation.

---
