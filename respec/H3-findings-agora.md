## Agora situations

The Agora situation focuses on the implementation and deployment of LDT's in production. Focussing on wider use, stability, trustworthiness etc. This aligns with the ArchiMate Technology / Implementation Layer.

### How appropriate are the systems we deploy to the size and goals of our organization?

Not all organisations operate on the same scale or have the same goals. Make sure to implement systems that are fit for purpose according to the goals of the organization.

__Best practices__

- Depending on the desired ambition and strategy of the organization, determine which type of environment suits your organization.

__Lessons Learned__

- Consider a ‘System of Systems’ architecture. A 'system of systems' architecture is an approach where independent, managerially separate systems collaborate to achieve a shared, overarching goal through their interconnected operations and emergent behaviors .Cloud platform like AWS or Azure might be a good fit for some organizations, but won't be a solution for others, depending on the IT strategy of the organization. Containerized deployment on other infrastructure platforms can be a viable alternative.

- Depending on your organizational strategy you might lean more to the use of open source products or make a choice for SaaS (Software as a Service ) offerings. Make sure these technical choices align with the organizational strategy.

### How do I want my deployments to be rolled out to users?

Adoption of a solution within an organization very much depends on the type of IT governance an organization has implemented. This is as much a technical challenge as it is an organizational one. Make sure to involve the relevant parties to maintain and support the roll-out of your solution. (As obvious as this sounds, it proves to be a bottleneck quite frequently)

__Best practices__

- Think about deployment scenarios in terms of 'Scale-up' and 'Scale-out'.
    - Scale-up means adding more resource to a single deployment
    - Scale-out means the ability to 'duplicate' the solution to parallel deployments.

- LDT's often deal with vast amounts of (real-time) data from various sources (IoT sensors, simulations, enterprise systems), complex processing for analysis and prediction (AI/ML models, simulations), and the need to provide insights to multiple users or systems concurrently. This creates significant scalability challenges where both 'Scale-up' and 'Scale-out' strategies become crucial: 

    - For specific data processing tasks scaling up individual nodes with more memory and processing power might be necessary to handle intensive computations efficiently.

    - A scale-out architecture allows the system to horizontally add storage and processing capacity to manage the growing data load effectively. This prevents bottlenecks associated with a single, large server reaching its limits (a problem with a pure scale-up approach).

### What type of technical framework do I need to address the training and education requirements?

This question has a strong connection to the other frameworks in the project. Make sure that requirements from the training and education can be met by the technical systems. Do I have a centralized system, what does my application environment and management thereof look like?

This again depends a lot on the type of IT Environment, as well as the HR department. What type of learning environment does the organization typically provide for users.

__Lessons Learned__

 - A lot of organizations struggle with data literacy within the organization. Do your end users actually know enough about digital systems to use them successfully in their day-to-day job? Work with HR on topics of Data/Digital Literacy and try to find synergies between programs.

- The promise of AI can only be fulfilled with access to well described data and processes outcomes. This promise is a driver for organizations to increase their efforts to get their data literacy up. 

### What type of Service Level Agreements (SLA's) do I have internally and externally? 

What type of availability is actually necessary, what about backup/restore?

__Lessons Learned__

- Cloud environments are typically 'high-available', but do pay attention to the 'shared responsibility' model most cloud providers adopt. Make sure you understand what falls under the responsibility of the Cloud provider and which responsibilities you have yourself.
- Work with frameworks like [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) or [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) to evaluate and benchmark your solutions.

### Do I have the right security frameworks in place?

Both in terms of [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) (privacy) and [NIS2](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive) (cybersecurity)

__Lessons Learned__

- It is not always the case that a team working on LDT solutions has the right communication channels to the teams within the organization working on Cybersecurity or privacy. We find there sometimes is a big gap in understanding challenges between teams. LDT teams are often already very Data literate, whereas Cybersecurity or privacy teams have a more application focused mindset. Pay attention to those differences and make sure you have a mutual understanding of each other's goals and challenges.

- More on this topic can be found in the Framework on Ethics, Inclusion, and Democratization.


### Do I have observability in place to monitor my systems in terms of cost, incidents, performance etc.?

Observability is the ability to measure a system’s current state based on the data it generates, recorded as logs, metrics, and traces. Distributed systems like we design for LDT's comprise of many components. It is therefore crucial to implement observability across the whole system to be able to monitor performance, incidents cost etc.

__Lessons Learned__

- In Cloud environments this is often the realm of cloud engineers. A Cloud environment is typically structured within 'subscriptions' or 'accounts'. For observability pay attention to this structure and work with the cloud team to make sure the way this is organised is aligned with organisational responsibilities.


### How do I make sure the type of my LDT is aligned with the goals of my organisation?

For an organisation to be able to benefit from the results from a LDT solution with a certain complexity level the organisation needs to be able to handle that complexity level in the way of digital change management as well. To be able to keep track of all the different components of a complex LDT system a configuration management system needs to be in place.

__Best Practices__

- Implement a robust Digital Change Management Framework and a comprehensive Configuration Management System in parallel with the deployment of a complex LDT solution to ensure organizational adoption, effective utilization, and sustained value realization.

- Make sure the LDT initiative is connected in the organization, through:
    - Broad Stakeholder Involvement: Many cities (e.g., Brussels, Dublin, Rennes) stress the involvement of multiple departments and stakeholders in the implementation process, ensuring that the LDTs meet diverse needs and objectives.
    - Focus on Collaboration: In cities like Rennes and Utrecht, there is a strong emphasis on collaborative platforms that allow various stakeholders, including the public, to interact with and contribute to urban planning processes.

- Pilot Projects as Learning Opportunities: Schuttrange is using the LDT as a pilot project, with the aim of scaling the solution to other municipalities, suggesting a phased approach to implementation that allows for iterative learning and adaptation.

__Lessons Learned__

- Recognize when your organization is not as mature as the ambition might suggest and take appropriate action. Either ramp up the effort on Change- and Configuration Management or choose a less ambitious and complex LDT system.

---
