## Agora questions

The Agora situation is focussing on the implementation and deployment of LDT's in production. Focussing on wider use, stability, trustworhyness etc.

### How appropriate are the systems we deploy to the size and goals of our organisation?

Not all organisations operate on the same scale or have the same goals. Make sure to implement systems that are fit for purpose according to the goals of the organisation.

__Best practices__

- Depending on the desired ambition and strategy of the organisation, determine which type of environment suits your organisation.

    - Cloud platform like AWS or Azure might be a good fit for some organisations, but won't be a solution for others. Containerized deployment on other infrastructure platform can be a viable alternative.
    - Depending on your organisational strategy you might lean more to the use of open source products or make a choice for SaaS offerings. Make sure these technical choices align with the organisational strategy.

### How do I want my deployments to be rolled out to users?

Adoption of a solution within an organisation very much depends on the type of IT governance an organisation has implemented. So this is as much a technical challenge as it is an organisational challenge. Make sure to involve the relevant parties to maintain and support the roll-out of your solution. (As obvious as this sounds, it proves to be a bottleneck quite frequently)

__Best practices__

- Think about deployment scenarios in terms of 'Scale-up' and 'Scale-out'.
    - Scale-up means adding more resource to a single deployment
    - Scale-out means the ability to 'duplicate' the solution to parallel deployments.

### Do I need tutorial systems like disposable environments to educate my users?

Do I have a centralized system, what does my application environment and management thereof look like?

This again depends a lot on the type of IT Environment, as well as the HR department. What type of learning enviroment does the organisation typically provide for users.

__Lessons Learned__
 - A lot of organisations struggle with data literacy within the organisation. Do your end users actually know enough about digital systems to use them succesfully in their day-to-day job? Work with HR on topics of Data/Digital Literacy and try to find synergies between programs.


### What type of Service Level Agreements (SLA's) do I have internally and externally? 

What type of availability is actually necessary, what about backup/restore.

__Lessons Learned__

- Cloud environments are typically 'high-available', but do pay attention to the 'shared responsibility' model most cloud providers adopt. Make sure you understand what falls under the responsibility of the Cloud provider and which responsibilities you have yourself.
- Work with frameworks like [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) or [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) to evaluate and benchmark your solutions.

### Do I have the rigt security frameworks in place?

Both in terms of GDPR (privacy) and NIS2 (cybersecurity)

__Lessons Learned__

- It is not always the case that a team working on LDT solutions has the right communication channels to the teams within the organisation working on Cybersecurity or privacy. We find there sometimes is a big gap in understanding challenges between teams. LDT teams are often already very Data literate, whereas Cybersecurity or privacy teams have a more application focussed mindset. Pay attention to those differences and make sure you have a mutual understanding of eachothers goals and challenges.



### Do I have observability in place to monitor my systems in terms of cost, incidents, performance etc.?

Observability is the ability to measure a system’s current state based on the data it generates, recorded as logs, metrics, and traces.
Distributed systems like we design for LDT's comprise of many components. It is therefore crucial to implement observability accross the whole system to be able to monitor performance, incidents cost etc. 

__Lessons Learned__

- In Cloud environments this is often the realm of cloud engineers. A Cloud environment is typically structured within 'subscriptions' or 'accounts'. For observability pay attention to this structure and work with the cloud team to make sure the way this is organised is aligned with organisational responsibilities.


### How do I make sure the type of my LDT is aligned with the goals of my organisation?

For an organisation to be able to benefit from the results from a LDT solution with a certain complexity level the organisation needs to be able to handle that complexity level in the way of digital change management as well. To be able to keep track of all the different components of a complex LDT system a configuration management system needs to be in place.



---
