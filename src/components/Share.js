function Share({ campaignData }) {
    function generateShareMessage() {
      return encodeURIComponent(
        `Donations here: ${"upi://pay?pa=" + campaignData.UpiID + "&tn=donate-to-me-app-donation"} \n
        
        Support ${campaignData.beneficiaryName}'s Medical Treatment\n\n` +
        `${campaignData.beneficiaryName} is currently admitted at ${campaignData.hospitalName} ` +
        `and is battling ${campaignData.disease}.\n\n` +
        `Campaign organized by: ${campaignData.creatorName}\n` +
        `Your support can make a difference.`
      );
    }
  
    const shareLinks = {
      whatsapp: `https://wa.me/?text=${generateShareMessage()}`,
      twitter: `https://twitter.com/intent/tweet?text=${generateShareMessage()}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}&summary=${generateShareMessage()}`,
      copytext: `${generateShareMessage()}`
    };
  
    return (
      <div className="mx-auto bg-white rounded-lg shadow-lg p-6 my-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Share Campaign</h2>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {/* WhatsApp */}
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <span className="mr-2">📱</span>
            WhatsApp
          </a>
  
          {/* Twitter */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            <span className="mr-2">🐦</span>
            Twitter
          </a>
  
          {/* LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="mr-2">💼</span>
            LinkedIn
          </a>
  
          {/* Copy Link Button */}
          <button
            onClick={() => {
              if (navigator.clipboard && window.isSecureContext) {
                 navigator.clipboard.writeText(decodeURIComponent(shareLinks.copytext));
            } else {
                // Use the 'out of viewport hidden text area' trick
                const textArea = document.createElement("textarea");
                textArea.value = decodeURIComponent(shareLinks.copytext);
                    
                // Move textarea out of the viewport so it's not visible
                textArea.style.position = "absolute";
                textArea.style.left = "-999999px";
                    
                document.body.prepend(textArea);
                textArea.select();
        
                try {
                    document.execCommand('copy');
                } catch (error) {
                    console.error(error);
                } finally {
                    textArea.remove();
                }
            }
            }}
            className="flex items-center px-6 py-3 hover:bg-gray-500 text-white rounded-lg  transition-colors bg-green-500"
          >
            <span className="mr-2">🔗</span>
            Copy Link
          </button>
        </div>
      </div>
    );
  }
  
  export default Share;
  