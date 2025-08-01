import"./style.c0ed6924.js";async function i(){try{const n=await(await fetch("/blog/posts-manifest.json")).json(),o=document.getElementById("posts-list");if(n.length===0){o.innerHTML="<p>No posts yet.</p>";return}const s=n.map(t=>`
                        <article class="post-preview">
                            <h2><a href="${t.path}">${t.title}</a></h2>
                            <time datetime="${t.date}">${new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</time>
                            ${t.description?`<p>${t.description}</p>`:""}
                        </article>
                    `).join("");o.innerHTML=s}catch(e){console.error("Failed to load posts:",e),document.getElementById("posts-list").innerHTML="<p>Failed to load posts.</p>"}}i();
