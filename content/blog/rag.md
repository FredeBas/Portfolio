---
title: Rag Chatbot
Date: 2026-04-17
---
# RAG Chatbot Project Overview
 
## Project Purpose
 
I built a RAG-based chatbot as part of my course in AI-driven application development. The goal was to create an intelligent assistant that can provide tailored answers based on selected sources rather than relying solely on the underlying model's general knowledge.
 
RAG stands for **Retrieval Augmented Generation** – an architecture where the chatbot first finds relevant material, retrieves it, and then uses it to formulate precise answers.
 
## Core Functionality
 
The chatbot enables users to ask questions about uploaded material or documentation.
 
Instead of generating responses purely from language intelligence, the system operates as follows:
 
1. receives a question from the user
2. searches through text segments in the submitted material
3. identifies the most relevant passages
4. uses these as the foundation for generating a response
The result is a chatbot that excels when working with documents, reference material, or domain-specific content.
 
## Implementation Process
 
I followed a classic RAG workflow:
 
* Started with a collection of documents or text
* Divided the material into smaller, manageable chunks
* Converted these chunks into numerical representations (embeddings)
* Stored embeddings in a searchable database
* When a user asks a question, the system retrieves the most relevant passages
* These passages are sent along with the question to the language model
* The model generates an answer based on the retrieved context
The core principle was connecting my own material to an LLM in a structured and reproducible manner.
 
## Advantages of the RAG Approach
 
Through this project, I discovered several important benefits of RAG:
 
* **Targeted relevance** – answers focus on the chosen topic
* **Fewer hallucinations** – the model is grounded in actual sources
* **Flexibility** – the system can work with custom documents
* **Specialization** – enables domain-specific assistants
At the same time, there are also important limitations to consider:
 
* answer quality depends directly on the quality of the source material
* the choice of chunking strategy and retrieval method is critical
* if incorrect context is retrieved, the answer becomes weaker
* RAG is not always the right solution for every problem type
## Key Learnings
 
This project taught me the following:
 
* how RAG architecture works in practice
* the role of embeddings in text representation and search
* how retrieval connects language models to external knowledge
* the difference between standard chatbots and RAG-based systems
* the importance of data quality and structure in AI systems
A crucial insight was that AI development isn't just about the model itself, but about the entire pipeline surrounding it.
 
## Technology Stack
 
* Large Language Model (LLM)
* Retrieval Augmented Generation (RAG)
* Embedding generation
* Document chunking
* Semantic search and retrieval

## Final Thoughts
 
This project gave me practical experience with how modern AI assistants can be connected to real data and customized sources.
 
The most eye-opening aspect was seeing how a chatbot becomes significantly more useful when it can answer from carefully selected sources instead of only general knowledge. This made the project feel much more realistic and closer to solutions encountered in industry applications.

## Issues i had with Rag chatbot

I had problems implementing the automation tool for the chatbot.
I wanted to set it up on github action to automatically get documents that is pushed.
It got a little complicated and i almost lost a computer screen because i couldn't get it to work😂
That didn't happen because i found out why it didn't work and it was my own mistake not going through the guide 2 times instead of 1, i had put at wrong variable in my actions on github