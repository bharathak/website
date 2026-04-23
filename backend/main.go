package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// Project represents a portfolio project.
type Project struct {
	ID          string   `json:"id"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Technologies []string `json:"technologies"`
	Link        string   `json:"link"`
}

// BlogPost represents a blog article.
type BlogPost struct {
	ID      string `json:"id"`
	Title   string `json:"title"`
	Date    string `json:"date"`
	Excerpt string `json:"excerpt"`
	Content string `json:"content"`
}

// ContactForm represents the data received from the contact form.
type ContactForm struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

var projects = []Project{
	{
		ID:    "1",
		Title: "High-Performance Log Aggregator",
		Description: "A distributed log collection service built in Go, capable of processing millions of events per second with Kafka and Redis integration.",
		Technologies: []string{"Go", "Kafka", "Redis", "gRPC"},
		Link: "#",
	},
	{
		ID:    "2",
		Title: "Kubernetes Custom Operator",
		Description: "A custom K8s operator for automating the lifecycle of stateful applications, reducing manual toil for infrastructure teams.",
		Technologies: []string{"Go", "Kubernetes SDK", "Docker"},
		Link: "#",
	},
	{
		ID:    "3",
		Title: "System Monitor CLI",
		Description: "A real-time system monitoring tool built in Go to track CPU, Memory, and Disk usage via direct kernel syscalls.",
		Technologies: []string{"Go", "Unix Syscalls", "Concurrency"},
		Link: "#",
	},
	{
		ID:    "4",
		Title: "Distributed Key-Value Store",
		Description: "A simplified implementation of the Raft consensus algorithm in Go for high-availability data storage.",
		Technologies: []string{"Go", "Networking", "Distributed Systems"},
		Link: "#",
	},
}

var posts = []BlogPost{
	{
		ID:      "1",
		Title:   "From YAML to Go: Embracing Systems Development",
		Date:    "April 22, 2026",
		Excerpt: "Exploring the motivations behind moving from pure infrastructure management to building systems software.",
		Content: "As a systems developer, I spent years writing YAML, managing infrastructure as code, and firefighting production issues. While invaluable, I realized I wanted to build the very tools I was deploying. Go provided the perfect bridge: it compiles to static binaries, has fantastic concurrency primitives, and offers the low-level control I crave without sacrificing developer velocity.",
	},
	{
		ID:      "2",
		Title:   "Building a System Monitor with Go and Unix Syscalls",
		Date:    "March 15, 2026",
		Excerpt: "A deep dive into using the 'syscall' package in Go to interact with the Linux kernel.",
		Content: "One of my first major projects in Go was building a system monitor. By diving into the 'syscall' package, I learned how to directly interface with the Linux kernel to retrieve memory, CPU, and disk metrics without relying on external dependencies. This post explores the technical challenges and the performance benefits of a pure Go approach.",
	},
}

func main() {
	mux := http.NewServeMux()

	// Health check endpoint
	mux.HandleFunc("GET /api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	})

	// Projects endpoint
	mux.HandleFunc("GET /api/projects", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(projects)
	})

	// Blog endpoint
	mux.HandleFunc("GET /api/blog", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(posts)
	})

	// Contact form handler
	mux.HandleFunc("POST /api/contact", func(w http.ResponseWriter, r *http.Request) {
		var form ContactForm
		if err := json.NewDecoder(r.Body).Decode(&form); err != nil {
			http.Error(w, "Invalid request payload", http.StatusBadRequest)
			return
		}

		log.Printf("Contact form submission: %+v\n", form)
		
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusAccepted)
		json.NewEncoder(w).Encode(map[string]string{"message": "Thank you for your message! I will get back to you soon."})
	})

	// Wrap mux with simple CORS middleware
	handler := corsMiddleware(mux)

	port := "0.0.0.0:8080"
	fmt.Printf("Backend API server started on %s\n", port)
	if err := http.ListenAndServe(port, handler); err != nil {
		log.Fatal(err)
	}
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // For development, allow all
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}
