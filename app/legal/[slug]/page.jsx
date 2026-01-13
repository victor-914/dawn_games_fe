import React from 'react';
import ReactMarkdown from 'react-markdown';

const STRAPI_URL = "https://cognixadmin.cognixtech.org";

const getStrapiMedia = (url) => {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return `${STRAPI_URL}${url.startsWith('/') ? url : `/${url}`}`;
};

async function getLegalDoc(slug) {
  try {
    const res = await fetch(`${STRAPI_URL}/api/legal-documents/slug/${slug}?populate=pdf_file`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    return null;
  }
}

export default async function LegalPage(props) {
  const params = await props.params;
  const slug = params.slug;

  const document = await getLegalDoc(slug);

  if (!document) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-gray-800">Document Not Found</h1>
        <p className="text-gray-500 mt-2">Could not find a document with slug: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{slug}</span></p>
      </div>
    );
  }

  const { title, content, lastUpdated, pdf_file } = document;
  const pdfUrl = pdf_file ? getStrapiMedia(pdf_file.url) : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10 border-b pb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            {lastUpdated && (
                <p className="text-gray-500 text-sm">
                    Effective Date: {new Date(lastUpdated).toLocaleDateString()}
                </p>
            )}
        </div>

        {content && (
          <div className="prose prose-lg text-gray-700 max-w-none mb-12">
              <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}

        {pdfUrl && (
            <div className="mt-8 border-t pt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Official Document Preview</h3>
                  <a href={pdfUrl} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">
                    Open in new tab
                  </a>
                </div>
                
                <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-gray-50">
                    <iframe 
                        src={pdfUrl}
                        className="w-full h-full"
                        title="PDF Viewer"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        )}
    </div>
  );
}