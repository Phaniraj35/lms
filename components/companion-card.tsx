import {ComponentProps} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image, {ImageProps} from "next/image";
import {Badge} from "@/components/ui/badge";


function CompanionCard({className = "", ...props}: ComponentProps<"div">) {
    return (
        <div
            className={cn('flex flex-col gap-5 px-4 py-4 rounded-lg border w-full min-lg:max-w-sm', className)} {...props} />
    )
}

function Subject({children, className = "", ...props}: ComponentProps<typeof Badge>) {
    return <Badge className={cn("bg-gray-900 text-white rounded-lg", className)} variant="secondary" {...props}>{children}</Badge>
}

function BookmarkButton({children, bookmarked, ...props}: { bookmarked: boolean } & ComponentProps<typeof Button>) {
    return <Button size="icon"  {...props}>
        <Image
            src={
                bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
        />
    </Button>
}

function Title({className = "", ...props}: ComponentProps<"div">) {
    return <div className={cn("font-semibold", className)} {...props} />
}

function Duration(props: ComponentProps<"div">) {
    return <div {...props} />
}

function DurationIcon({src, alt, ...props}: Partial<ImageProps>) {
    return <Image
        src="/icons/clock.svg"
        alt="duration"
        width={13.5}
        height={13.5}
        {...props}
    />
}

function CTA({className = "", ...props}: ComponentProps<typeof Button>) {
    return <Button className={cn("btn-primary", className)} {...props}/>
}


CompanionCard.Subject = Subject;
CompanionCard.BookmarkButton = BookmarkButton;
CompanionCard.Title = Title;
CompanionCard.Duration = Duration;
CompanionCard.CTA = CTA;
CompanionCard.DurationIcon = DurationIcon;


export default CompanionCard
