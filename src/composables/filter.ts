import { computed, ref } from 'vue';
import { usePostsStore } from '@/stores/postsStore';

const postsStore = usePostsStore();

export function useFilter(tags: string[]) {
  const posts = ref(postsStore.postsArray);
  if (tags.length > 0) {
    const filterPosts = computed(() => {
      let asd: string[] = [];
      tags.forEach((tag) => {
        asd = posts.value.filter(post => post.tags.includes(tag));
      });
      return asd;
    });
    return { filterPosts };
  }
  return { posts };
}
