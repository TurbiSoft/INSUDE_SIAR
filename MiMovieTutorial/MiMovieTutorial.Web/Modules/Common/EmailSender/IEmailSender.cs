using MimeKit;

namespace MiMovieTutorial.Common
{
    public interface IEmailSender
    {
        void Send(MimeMessage message, bool skipQueue = false);
    }
}