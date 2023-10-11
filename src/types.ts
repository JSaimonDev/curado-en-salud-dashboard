export interface FetchedPost {
  createdAt: string
  updatedAt: string
  title: string
  id: number
  featuredImage: string
  content: string
  categoryId: number
  subcategoryId: number
  category: {
    name: string
  }
  subcategory: { name: string, category: string }
  tags: string[]
}

