import asyncio
from external.supabase_client import get_supabase

async def test_rls():
    supabase = get_supabase()
    try:
        response = supabase.table("GoHK Food").select("*").execute()
        print(f"Data found with anon client: {len(response.data)} items")
        if len(response.data) == 0:
            print("RLS likely preventing read access for anon role.")
    except Exception as e:
        print(f"Error reading with anon client: {e}")

if __name__ == "__main__":
    asyncio.run(test_rls())
