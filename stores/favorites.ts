import { defineStore } from 'pinia';

// Define a type for Project to make the code more type-safe and self-documenting.
type Project = {
  id: string | number;
  [key: string]: any;  // This allows the Project object to have other properties in addition to 'id'.
};

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Project[],
  }),

  actions: {
    /**
     * Adds a project to the favorites list.
     * @param {Project} project - The project to be added.
     */
    addFavorite(project: Project) {
      if (!this.isFavorite(project.id)) {
        this.favorites.push(project);
      }
    },

    /**
     * Removes a project from the favorites list by its ID.
     * @param {string | number} projectId - The ID of the project to be removed.
     */
    removeFavorite(projectId: string | number) {
      const index = this.favorites.findIndex((project: Project) => project.id === projectId);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    },

    /**
     * Checks if a project with a specific ID is already in the favorites list.
     * @param {string | number} projectId - The ID of the project to check.
     * @returns {boolean} - Returns true if the project is a favorite, otherwise false.
     */
    isFavorite(projectId: string | number): boolean {
      return this.favorites.some((project: Project) => project.id === projectId);
    },
  },
});
