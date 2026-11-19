export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const el = document.createElement(tag);
        el.textContent = content;
        document.body.appendChild(el);
    }
}

export function generateTree(childrenCount, level) {
    function build(depth) {
        const node = document.createElement('div');
        node.classList.add(`item_${depth}`);

        if (depth < level) {
            for (let i = 0; i < childrenCount; i++) {
                node.appendChild(build(depth + 1));
            }
        }
        return node;
    }

    return build(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);

    tree.querySelectorAll('.item_2').forEach((node) => {
        const section = document.createElement('section');
        section.classList.add('item_2');

        while (node.firstChild) {
            section.appendChild(node.firstChild);
        }
        node.replaceWith(section);
    });

    return tree;
}
