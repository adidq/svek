<div>
    <h1>{postId}</h1>
    <hr>
    <form>
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Awesome Title" required>
        </div>
        <div class="mb-3">
            <label for="content" class="form-label">Content</label>
            <textarea class="form-control" id="content" rows="5" placeholder="blah blah blah"></textarea>
        </div>
        <button type="button" class="btn btn-primary">post</button>
    </form>
</div>
<script>
    import { page } from "$app/stores"
    const postId = $page.params.id;
</script>