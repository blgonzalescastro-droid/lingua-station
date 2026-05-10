const FALLBACK_IMAGE = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image';

export function NewsCard({ article }) {
    const {
        title,
        description,
        link,
        image_url,
        source_name,
        pubDate,
        category,
    } = article;

    const formattedDate = pubDate
        ? new Date(pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : '';

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
            <img
                src={image_url || FALLBACK_IMAGE}
                alt={title}
                className="w-full h-44 object-cover"
                onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
            />
            <div className="p-4 flex flex-col flex-1">
                {category?.length > 0 && (
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">
                        {category[0]}
                    </span>
                )}
                <h3 className="text-gray-900 font-semibold text-sm leading-snug mb-2 line-clamp-3">
                    {title}
                </h3>
                {description && (
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-3">
                        {description}
                    </p>
                )}
                <div className="mt-auto flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                        <span className="font-medium text-gray-500">{source_name}</span>
                        {formattedDate && <span> · {formattedDate}</span>}
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-700 font-medium"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}
