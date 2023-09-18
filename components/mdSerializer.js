// https://stackoverflow.com/a/75635815
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export default function gfmSerialize(source) {
    return serialize(source, {
        mdxOptions: { remarkPlugins: [remarkGfm] },
    })
}